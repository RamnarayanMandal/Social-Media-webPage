import React, { useState, useRef, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";

export function SmsBox(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const [senderText, setSenderText] = useState([]);
  const messageRef = useRef(null);

  useEffect(() => {
    if (messageRef.current) {
      // Scroll to bottom of message box on update
      messageRef.current.scrollTop = messageRef.current.scrollHeight;
    }
  }, [senderText]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let SenderText = e.target.Message.value;
    const message = {
      sender: props.Name,
      received: props.Name,
      text: SenderText,
    };
    setSenderText([...senderText, message]);
    e.target.Message.value = "";
  };

  return (
    <>
      <Button onClick={handleOpen} variant="gradient" className="py-2 px-3">
        Message
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="flex gap-5">
          <div className="w-20">
            <img
              src={props.url}
              alt="profile photo"
              className="rounded-full h-10 w-10"
            />
          </div>
          <div className="w-96">
            <p className="my-1 font-mono font-medium text-sm">{props.Name}</p>
          </div>
          <div className="flex flex-reverse justify-end content-center w-10/12">
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="ml-2 self-end"
            >
              Close
            </Button>
          </div>
        </DialogHeader>
        <div className="w-full p-10" ref={messageRef} style={{ maxHeight: "300px", overflowY: "auto" }}>
          <div className="flex justify-start">
            <p className="bg-pink-500 text-white px-2 py-1 rounded">hi</p>
          </div>
          <div className="float-right my-4">
            {senderText.map((sms, index) => (
              <p key={index} className="bg-indigo-600 text-white px-2 py-1 rounded my-4">{sms.text}</p>
            ))}
          </div>
        </div>
        <form onSubmit={handleOnSubmit} className="w-full">
          <DialogFooter className="flex justify-start content-center items-center">
            <div className="w-72">
              <label htmlFor="Message"></label>
              <Input label="Message" id="Message" name="Message" type="text" required />
            </div>
            <Button type="submit" color="blue" className="ml-2">
              Send
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
}
