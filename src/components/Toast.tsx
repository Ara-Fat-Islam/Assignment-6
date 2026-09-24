"use client";

type ToastProps = {
  message: string;
};

export default function Toast({ message }: ToastProps) {
  if (!message) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 rounded-lg border border-[#343740] bg-[#15171D] px-5 py-3 text-sm text-white shadow-lg">
      <span className="mr-2 text-[#CCFF00]">✓</span>
      {message}
    </div>
  );
}