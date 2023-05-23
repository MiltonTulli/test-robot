import ResponsiveAppBar from "./components/ResponsiveAppBar";

export default function RootLayout({ children }) {
  return(
    <html>
      <head>
        <title>TechZone</title>
      </head>
      <body>
        <ResponsiveAppBar/>
        
        {children}
        
      </body>
    </html>
  )
}