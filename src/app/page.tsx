

export default function Home() {
  return (
      <div className="flex">
        <video className="w-screen z-[-1] " src="http://localhost:3000/synth.mp4" muted loop autoPlay/>
        <h1 className="absolute mx-auto">Loop</h1>
      </div>
  )
}
