import { inject, Injectable } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ValidatorFn,
  Validators,
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

function validateRatioOptions(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const optionsArray = control as FormArray;
    if (optionsArray.controls.length < 2) {
      return { notEnoughOptions: true };
    }
    return null;
  };
}

@Injectable()
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
        question: new FormControl<string>('', [Validators.required]),
      }),
      choicesOptionsGroup: this.formBuilder.group({
        choices: this.formBuilder.array([] as FormControl<string>[], [
          validateRatioOptions(),
        ]),
      }),
      answerGroup: this.formBuilder.group({
        answer: new FormControl<string>('', [Validators.required]),
      }),
      responsesGroup: this.formBuilder.group({
        correctResponse: new FormControl<string>('', [Validators.required]),
        incorrectResponse: new FormControl<string>('', [Validators.required]),
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
            value: [choice.value, [Validators.required]],
          })
        );
      });
    }
    // ! Hack because the Result component has not subscribed to the form value change yet
    requestAnimationFrame(() => {
      form.setValue(this.marshalFormValueIntoFormGroup(value));
    });
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

  updateParentFormGroupValue(value: QuizConfig) {
    this.parentFormGroup
      .get(this.parentFormControlName)
      ?.setValue(JSON.stringify(value));
  }

  marshalFormGroupIntoFormValue(value: QuizConfigFormRawData): QuizConfig {
    return {
      question: value.questionGroup.question,
      answer: value.answerGroup.answer,
      choices: value.choicesOptionsGroup.choices,
      correctResponse: value.responsesGroup.correctResponse,
      incorrectResponse: value.responsesGroup.incorrectResponse,
    };
  }
}
