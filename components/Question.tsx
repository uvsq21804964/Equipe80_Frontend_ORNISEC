'use client';

import { Pencil, CheckCircle2 } from 'lucide-react';

import { useState } from 'react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';

import Button from '@/components/Button';
import { Textarea } from '@/components/ui/textarea';

const FormSchema = z.object({
  note: z.string(),
  commentaire: z.string(),
});
interface HomePageProps {
  question: {
    label: string;
    aide: string[];
    note: number;
    commentaire: string;
  };
  nb: number;
}

const Question = ({ question, nb }: HomePageProps) => {
  const [note, setNote] = useState(question.note);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      note: question.note.toString(),
      commentaire: question.commentaire,
    },
  });
  // const formMethods = useForm(); Crée une instance de contrôle distincte

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  function foo(item: string) {
    const match = item.match(/\d+/);
    if (match === null) return;
    setNote(parseInt(match[0], 10));
  }

  return (
    <Card key={question.label} className="w-full md:w-auto bg-text1 text-text2">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-sm font-medium">
          {nb + 1} - {question.label}
        </CardTitle>
        <Pencil className="h-4 w-4 mr-2 text-blue-600 hover:text-blue-600 hover:font-bold" />
      </CardHeader>
      <CardContent className="">
        <div className="grid grid-cols-1 gap-6">
          <div className="mt-2 border bg-slate-100 rounded-md p-4">
            <div className="font-medium flex items-center justify-between text-sm text-slate-700">
              <FormProvider {...form}>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full"
                  >
                    <div>
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="note"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl className="m">
                                <div className="flex items-center justify-between">
                                  <div>{'Note '}</div>
                                  <input
                                    className="
                                        form-input
                                        block
                                        w-full
                                        rounded-xl
                                        border-0
                                        py-1.5
                                        ml-2
                                        bg-text1
                                        text-text2
                                        shadow-sm
                                        ring-1
                                        ring-inset
                                        ring-gray-300
                                        placeholder:text-gray-400
                                        focus:ring-2
                                        focus:ring-inset
                                        focus:ring-sky-600
                                        sm:text-sm
                                        sm:leading-6`"
                                    id="number"
                                    type="number"
                                    placeholder="Note"
                                    max={10}
                                    min={0}
                                    step={0.05}
                                    {...field}
                                    value={note}
                                  />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="commentaire"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Textarea
                                  maxLength={500}
                                  className="form-input
                                    block
                                    w-full
                                    rounded-xl
                                    border-0
                                    py-1.5
                                    bg-text1
                                    text-text2
                                    shadow-sm
                                    ring-1
                                    ring-inset
                                    ring-gray-300
                                    placeholder:text-gray-400
                                    focus:ring-2
                                    focus:ring-inset
                                    focus:ring-sky-600
                                    sm:text-sm
                                    sm:leading-6`"
                                  placeholder="Pour quelles raisons avez-vous attribué cette note ?"
                                  {...field}
                                />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="w-64">
                          {question.aide?.map((item, index) => (
                            <div key={item}>
                              <input
                                className="
                                        form-input
                                        block
                                        w-full
                                        rounded-xl
                                        border-0
                                        py-1.5
                                        ml-2
                                        bg-text1
                                        text-text2
                                        shadow-sm
                                        ring-1
                                        ring-inset
                                        ring-gray-300
                                        placeholder:text-gray-400
                                        focus:ring-2
                                        focus:ring-inset
                                        focus:ring-sky-600
                                        sm:text-sm
                                        sm:leading-6`"
                                id={index.toString()}
                                type="button"
                                onClick={() => foo(item)}
                                value={item}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button shadow border violetFonce>
                          Valider
                          <CheckCircle2 className="w-5 h-5 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </form>
                </Form>
              </FormProvider>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default Question;
