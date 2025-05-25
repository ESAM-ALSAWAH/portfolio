export default function Loading() {
  return (
    <div className="bg-background fixed inset-x-0 top-0 w-full z-[10000] rounded-none min-h-screen animate-in  slide-in-from-top-[80%] duration-500 grid place-items-center">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
