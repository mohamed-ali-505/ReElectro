import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Plus } from 'lucide-react'

export default function RecyclingRequests() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Recycling Requests</h1>
          <p className="text-muted-foreground">Manage your bulk recycling requests here.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Request
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Active Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                id: 'REQ-001',
                date: '2024-01-15',
                items: '200 Mixed Electronics',
                location: 'Cairo HQ',
                status: 'Scheduled',
              },
              {
                id: 'REQ-002',
                date: '2024-01-20',
                items: '150 Computers and Peripherals',
                location: 'Alexandria Branch',
                status: 'Pending',
              },
              {
                id: 'REQ-003',
                date: '2024-01-25',
                items: '300 Mobile Devices',
                location: 'Giza Office',
                status: 'Processing',
              },
            ].map((request) => (
              <div key={request.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">{request.items}</p>
                  <p className="text-sm text-muted-foreground">ID: {request.id}</p>
                  <p className="text-sm text-muted-foreground">Location: {request.location}</p>
                  <p className="text-sm text-muted-foreground">Date: {request.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    request.status === 'Scheduled' 
                      ? 'bg-blue-100 text-blue-800'
                      : request.status === 'Processing'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {request.status}
                  </span>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

