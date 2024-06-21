import './globals.css'
import MainComponent from "@/components/MainComponent"

export const metadata = {
  title: 'myAssistant',
  description: 'Create your own GPT Assistant powered by OpenAI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainComponent children={children}/>
      </body>
    </html>
  )
}
