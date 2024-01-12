/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

import { Tabs, TabsContent } from '@radix-ui/react-tabs';
import Question from '@/components/Question';

export default function Questionnaire({
  questions,
  para,
}: {
  // eslint-disable-next-line react/require-default-props
  questions?: {
    ref: string;
    catégorie: string;
    chantier: string;
    question: string;
    comment: string;
    'note numérique': number;
    'aide à la notation': string[];
  }[];
  para: string;
}) {
  return (
    <Tabs defaultValue="overview" className="space-y-4">
      <TabsContent value="overview" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          {questions?.map((question, index) => (
            <Question
              key={question.question}
              question={question}
              nb={index}
              parametre={para}
            />
          ))}
        </div>

        {/* <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
          <Card className="w-full mx-auto bg-text1 text-text2">
            <CardHeader>
              <CardTitle>Audits effectués</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="justify-center items-center flex">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                  <div className="space-y-4">Chart</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div> */}
      </TabsContent>
    </Tabs>
  );
}
