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
  correctAnswer: string;
  ratioOptions: { value: string }[];
  correctAnswerResponse: string;
  incorrectAnswerResponse: string;
}

export interface QuizConfigForm {
  questionGroup: QuestionGroup;
  choicesOptionsGroup: ChoicesOptionsGroup;
  answerGroup: AnswerGroup;
  responsesGroup: ResponsesGroup;
}

export type QuestionGroup = FormGroup<{ question: FormControl<string> }>;
export type ChoicesOptionsGroup = FormGroup<{ choices: FormArray<FormControl<string>> }>;
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

  quizConfigValue = new BehaviorSubject<QuizConfig>({
    question: '',
    correctAnswer: '',
    ratioOptions: [],
    correctAnswerResponse: '',
    incorrectAnswerResponse: '',
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
}
