import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";

export function User({ ...props }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="Button violet">{props.name}</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
        <Dialog.Content className="fixed bg-white py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Dialog.Title className="text-red-600">Dados do Usuario</Dialog.Title>
          <Dialog.Close asChild>
            <svg
              width="46"
              height="46"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.25 17.25 6.75 6.75"></path>
              <path d="m17.25 6.75-10.5 10.5"></path>
            </svg>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
