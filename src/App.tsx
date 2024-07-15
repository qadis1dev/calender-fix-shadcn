import { Calendar } from "@/components/ui/calendar";

const App = () => {
  return (
    <main className="flex h-[100dvh] items-center justify-center">
      <Calendar captionLayout="dropdown-buttons" fromYear={1900} toYear={2024} />
    </main>
  )
}

export default App;