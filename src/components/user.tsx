import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";

export function User({ ...props }) {
  return <button className="Button violet">{props.name}</button>;
}
