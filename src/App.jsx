import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"

export default function App() {
  const [activeTab, setActiveTab] = useState("text")
  const [qrCodeModalOpen, setQrCodeModalOpen] = useState(false)
  const [qrCodeData, setQrCodeData] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    setQrCodeData(`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(qrCodeData)}`)
    setQrCodeModalOpen(true)
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <div className="w-full max-w-md p-6 bg-card rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">QR Code Generator</h1>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList>
            <TabsTrigger value="text">Text</TabsTrigger>
            <TabsTrigger value="url">URL</TabsTrigger>
            <TabsTrigger value="file">File</TabsTrigger>
          </TabsList>
          <TabsContent value="text">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Label htmlFor="text-content">Enter Text</Label>
                <Textarea
                  id="text-content"
                  placeholder="Enter the text you want to generate a QR code for"
                  className="w-full p-2 border rounded-md"
                  value={qrCodeData}
                  onChange={(e) => setQrCodeData(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                Generate QR Code
              </Button>
            </form>
          </TabsContent>
          <TabsContent value="url">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Label htmlFor="url-content">Enter URL</Label>
                <Input
                  id="url-content"
                  type="url"
                  placeholder="Enter the URL you want to generate a QR code for"
                  className="w-full p-2 border rounded-md"
                  value={qrCodeData}
                  onChange={(e) => setQrCodeData(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                Generate QR Code
              </Button>
            </form>
          </TabsContent>
          <TabsContent value="file">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Label htmlFor="file-content">Select File</Label>
                <Input
                  id="file-content"
                  type="file"
                  className="w-full p-2 border rounded-md file:text-foreground"
                  onChange={(e) => setQrCodeData(e.target.files[0].name)}
                />
              </div>
              <Button type="submit" className="w-full">
                Generate QR Code
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
      <Dialog open={qrCodeModalOpen} onOpenChange={setQrCodeModalOpen}>
        <DialogContent className="bg-card p-6 rounded-lg shadow-lg">
          <DialogHeader>
            <DialogTitle>Your QR Code</DialogTitle>
            <DialogDescription>Scan this QR code to access your content.</DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mb-4">
            <img src={qrCodeData} width={300} height={300} alt="QR Code" />
          </div>
          <DialogFooter>
            <Button onClick={() => setQrCodeModalOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}