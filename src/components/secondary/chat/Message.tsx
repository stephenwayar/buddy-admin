import React from "react";
import Inbox from "./Inbox";
import Outbox from "./Outbox";
import type { IMessage } from "./Chat";

interface Props {
  type: IMessage['type'];  // Use type directly as string ('inbox' | 'outbox')
  data: IMessage['data'];  // Use data as is
}

export default function Message({ type, data }: Props) {
  if (type === 'inbox') return <Inbox data={data} />;

  if (type === 'outbox') return <Outbox data={data} />;

  return null; // Fallback if no match
}