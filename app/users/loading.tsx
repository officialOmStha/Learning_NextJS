// app/loading.tsx
export default function LoadingState() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-black" />

        {/* Text */}
        <p className="text-gray-600 text-sm tracking-wide">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
}
