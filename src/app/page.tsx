"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Children, useState } from "react";

export default function Home() {
  const [inputValueFirst, setInputValueFirst] = useState(0);
  const [inputValueSecond, setInputValueSecond] = useState(0);
  const [calculatorInput, setCalculatorInput] = useState("");
  const [output, setOutput] = useState(0);
  const HandleInputValueFirst = (e: { target: { value: string } }) => {
    setInputValueFirst(Number(e.target.value));
  };
  const HandleInputValueSecond = (e: { target: { value: string } }) => {
    setInputValueSecond(Number(e.target.value));
  };
  const HandleCalculatorValue = (value: string) => {
    setCalculatorInput(value);
  };
  const HandleCalculator = () => {
    if (calculatorInput == "+") {
      setOutput(inputValueFirst + inputValueSecond);
    } else if (calculatorInput == "-") {
      setOutput(inputValueFirst - inputValueSecond);
    } else if (calculatorInput == "*") {
      setOutput(inputValueFirst * inputValueSecond);
    } else {
      setOutput(inputValueFirst / inputValueSecond);
    }
  };
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center gap-[35px]">
      <Input type="number" onChange={HandleInputValueFirst} className="w-[75px] h-[75px]" />
      <Select onValueChange={HandleCalculatorValue}>
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Calculator" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="+">+</SelectItem>
          <SelectItem value="-">-</SelectItem>
          <SelectItem value="*">*</SelectItem>
          <SelectItem value="/">/</SelectItem>
        </SelectContent>
      </Select>
      <Input type="number" onChange={HandleInputValueSecond} className="w-[75px] h-[75px]" />
      <Button
        variant="outline"
        className="w-[75px] h-[75px] bg-white text-[20px]"
        onClick={HandleCalculator}
      >
        =
      </Button>
      <div className="w-[75px] h-[75px] outline outline-gray-200 flex justify-center items-center">
        {output}
      </div>
    </div>
  );
}
