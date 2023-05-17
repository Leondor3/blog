import { useState, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schema = yup
  .object({
    userName: yup.string().required("Por favor, digite seu nome."),
    subject: yup.string().required("Por favor, digite o assunto."),
    message: yup.string().required("Por favor, digite sua mensagem."),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await axios.post("http://localhost:3333/contact", data);
      formRef.current?.reset();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="mt-32 w-full h-[30rem]">
      <div className="absolute bg-blue-800 left-0 w-full z-0 h-[30rem]"></div>
      <div className="flex flex-col items-center justify-center h-[30rem] relative z-10">
        <div>
          <h1 className="text-3xl text-white font-bold mb-6">Contato</h1>
        </div>
        <div className="h-max w-96 bg-white rounded-md ring-1 shadow-md">
          <form
            className="mt-4 w-full"
            onSubmit={handleSubmit(onSubmit)}
            ref={formRef}
          >
            <div className="flex flex-col gap-4 px-5">
              <div className="flex flex-col">
                <label>Seu Nome:</label>
                <input
                  className="bg-gray-200 p-2 rounded-lg mt-2 focus:border-zinc-700 focus:border outline-none  placeholder:text-zinc-500"
                  placeholder="Digite seu Nome"
                  {...register("userName")}
                />
                <p className="text-red-600 mt-2">{errors.userName?.message}</p>
              </div>
              <div className="flex flex-col">
                <label>Assunto:</label>
                <input
                  className="bg-gray-200 p-2 rounded-lg mt-2 focus:border-zinc-700 focus:border outline-none placeholder:text-zinc-500"
                  placeholder="Digite o Assunto"
                  {...register("subject")}
                />
                <p className="text-red-600 mt-2">{errors.subject?.message}</p>
              </div>
              <div className="flex flex-col">
                <label>Messagem:</label>
                <textarea
                  className="bg-gray-200 p-2 rounded-lg mt-2 focus:border-zinc-700 focus:border outline-none placeholder:text-zinc-500"
                  placeholder="Do que você precisa?"
                  {...register("message")}
                />
                <p className="text-red-600 mt-2">{errors.message?.message}</p>
              </div>
              <button className="bg-blue-600 rounded-sm p-2 mb-6 text-white">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
