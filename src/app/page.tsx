import Form from "./components/Form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 sm:p-12 md:p-24">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-3 sm:mb-6">
        Anonymous Complaints
      </h1>
      <h2 className="text-xl text-center text-gray-500 dark:text-gray-400 mb-6 sm:mb-12">
        Send a complaint towards the person who annoys the most, and we'll
        handle it ;)
      </h2>
      <Form />
    </main>
  );
}
