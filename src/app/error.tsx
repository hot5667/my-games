"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { refresh } = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div 
      className="min-w-screen min-h-screen flex flex-col justify-center items-center bg-white" // 배경을 하얀색으로 설정
    >
      <h2 className="text-black">에러 발생!</h2>
      <h3 className="text-black">서비스 이용 중 오류가 발생했습니다.</h3>
      <p className="text-black">잠시 후 다시 시도해 주시기 바랍니다.</p>
      <button
        onClick={() => {
          refresh();
          reset();
        }}
        className="mt-4 p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        다시 시도
      </button>
    </div>
  );
}
