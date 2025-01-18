import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Search, Edit, Trash2, MoreVertical, Users } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Mock data - replace with actual data from your backend
const mockCooperatives = [
  {
    id: 1,
    name: 'Injibara Farmers Cooperative',
    members: 125,
    established: '2015-06-20',
    type: 'Niger Seed',
    location: 'Injibara',
    status: 'Active',
  },
  // Add more mock data as needed
];

export default function Cooperatives() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCooperatives = mockCooperatives.filter(coop =>
    coop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    coop.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AdminLayout currentPage="cooperatives">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-neutral-900">Cooperatives</h1>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Cooperative
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-neutral-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-neutral-600">Total Members</p>
                <p className="text-2xl font-semibold text-neutral-900">1,234</p>
              </div>
            </div>
          </div>
          {/* Add more stat cards as needed */}
        </div>

        {/* Filters and Search */}
        <div className="flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
            <Input
              placeholder="Search cooperatives..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">Filter</Button>
        </div>

        {/* Cooperatives Table */}
        <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Members</TableHead>
                <TableHead>Established</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCooperatives.map((coop) => (
                <TableRow key={coop.id}>
                  <TableCell className="font-medium">{coop.name}</TableCell>
                  <TableCell>{coop.members}</TableCell>
                  <TableCell>{new Date(coop.established).toLocaleDateString()}</TableCell>
                  <TableCell>{coop.type}</TableCell>
                  <TableCell>{coop.location}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                      {coop.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="flex items-center">
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  );
}