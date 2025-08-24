export default function TestPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500">
        🚀 Tailwind is working!
      </h1>

      <p className="text-lg text-gray-700">
        If you see this text styled, Tailwind is set up correctly.
      </p>

      <button className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
        Test Button
      </button>
    </div>
  )
}
