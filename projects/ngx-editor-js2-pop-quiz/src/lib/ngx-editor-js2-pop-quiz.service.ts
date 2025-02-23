import { inject, Injectable } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

export interface QuizConfig {
  question: string;
  choices: { value: string }[];
  answer: string;
  correctResponse: string;
  incorrectResponse: string;
}

export interface QuizConfigFormRawData {
  questionGroup: { question: string };
  choicesOptionsGroup: { choices: { value: string }[] };
  answerGroup: { answer: string };
  responsesGroup: { correctResponse: string; incorrectResponse: string };
}

export interface QuizConfigForm {
  questionGroup: QuestionGroup;
  choicesOptionsGroup: ChoicesOptionsGroup;
  answerGroup: AnswerGroup;
  responsesGroup: ResponsesGroup;
}

export type QuestionGroup = FormGroup<{ question: FormControl<string> }>;
export type ChoicesOptionsGroup = FormGroup<{
  choices: FormArray<FormControl<string>>;
}>;
export type AnswerGroup = FormGroup<{ answer: FormControl<string> }>;
export type ResponsesGroup = FormGroup<{
  correctResponse: FormControl<string>;
  incorrectResponse: FormControl<string>;
}>;

@Injectable({
  providedIn: 'root',
})
export class NgxEditorJs2PopQuizService {
  formBuilder = inject(NonNullableFormBuilder);

  parentFormGroup!: FormGroup;
  parentFormControlName!: string;

  quizConfigValue = new BehaviorSubject<QuizConfig>({
    question: '',
    answer: '',
    choices: [],
    correctResponse: '',
    incorrectResponse: '',
  });
  quizConfigValue$ = this.quizConfigValue.asObservable();

  quizConfigForm = new BehaviorSubject<FormGroup<QuizConfigForm>>(
    this.formBuilder.group({
      questionGroup: this.formBuilder.group({
        question: new FormControl<string>(''),
      }),
      choicesOptionsGroup: this.formBuilder.group({
        choices: this.formBuilder.array([] as FormControl<string>[]),
      }),
      answerGroup: this.formBuilder.group({
        answer: new FormControl<string>(''),
      }),
      responsesGroup: this.formBuilder.group({
        correctResponse: new FormControl<string>(''),
        incorrectResponse: new FormControl<string>(''),
      }),
    }) as FormGroup<QuizConfigForm>
  );
  quizConfigForm$ = this.quizConfigForm.asObservable();

  setQuizConfigValue(value: QuizConfig) {
    this.quizConfigValue.next(value);
    return value;
  }

  initializeQuizConfigForm(value: QuizConfig) {
    const form = this.quizConfigForm.value;
    const choicesArray = form.get('choicesOptionsGroup.choices') as FormArray;
    if (!choicesArray || choicesArray.length === 0) {
      value.choices.forEach((choice) => {
        choicesArray.push(
          this.formBuilder.group({
            value: new FormControl<string>(choice.value),
          })
        );
      });
    }
    form.setValue(this.marshalFormValueIntoFormGroup(value));
    return form;
  }

  marshalFormValueIntoFormGroup(value: any) {
    return {
      answerGroup: {
        answer: value.answer,
      },
      choicesOptionsGroup: {
        choices: value.choices,
      },
      questionGroup: {
        question: value.question,
      },
      responsesGroup: {
        correctResponse: value.correctResponse,
        incorrectResponse: value.incorrectResponse,
      },
    };
  }

  updatePranetFormGroupValue(value: QuizConfigFormRawData) {
    // Need to Marshal the value back into QuizConfig
    const marshaledValue = {
      question: value.questionGroup.question,
      answer: value.answerGroup.answer,
      choices: value.choicesOptionsGroup.choices,
      correctResponse: value.responsesGroup.correctResponse,
      incorrectResponse: value.responsesGroup.incorrectResponse,
    };
    this.parentFormGroup
      .get(this.parentFormControlName)
      ?.setValue(JSON.stringify(marshaledValue));
  }
}
