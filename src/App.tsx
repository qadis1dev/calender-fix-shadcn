import { Calendar } from "@/components/ui/calendar";

const App = () => {
  return (
    <main className="flex h-[100dvh] items-center justify-center">
      <Calendar captionLayout="dropdown-buttons" fromYear={1990} toYear={2024} />
    </main>
  )
}

export default App;