import { IQuestion } from '@cw24/evergreen.lib';
import { QuestionComponent } from './question.js';

export type QuestionAndAnswerViewProps = {
  questions: IQuestion[];
};

export function QuestionAndAnswerView({
  questions,
}: QuestionAndAnswerViewProps) {
  return (
    <div>
      {questions?.map((q) => (
        <QuestionComponent key={q.id} {...q} />
      ))}
    </div>
  );
}
