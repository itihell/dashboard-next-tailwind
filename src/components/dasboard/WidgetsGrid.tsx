"use client";

import { IoCartOutline } from "react-icons/io5";
import { SimpleWidget } from "..";
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {
  const isCart = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        title={`${isCart}`}
        subTitle="Productos agregados"
        label="Contador"
        icon={<IoCartOutline className="text-blue-600" size={70} />}
        href="/dashboard/counter"
      />
    </div>
  );
};
