import { useState } from 'react';
import { Menu, X, Users, Building2, FileText, Settings, LogOut, Bell, Search as SearchIcon, Layout, ChevronRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface AdminLayoutProps {
  children: React.ReactNode;
  currentPage: string;
}

export default function AdminLayout({ children, currentPage }: AdminLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [notifications] = useState([
    { id: 1, title: 'New member registration', time: '5m ago', type: 'success' },
    { id: 2, title: 'Activity updated', time: '1h ago', type: 'info' },
    { id: 3, title: 'System update', time: '2h ago', type: 'warning' },
  ]);

  const navigation = [
    { name: 'Members', href: '/admin/members', icon: Users },
    { name: 'Cooperatives', href: '/admin/cooperatives', icon: Building2 },
    { name: 'Activities', href: '/admin/activities', icon: FileText },
    { name: 'Front Page', href: '/admin/front-page', icon: Layout },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white admin-sidebar",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Sidebar content remains the same */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-neutral-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                Admas Admin
              </span>
              <span className="text-xs text-neutral-500 block">Management Portal</span>
            </div>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden p-2 rounded-md text-neutral-500 hover:bg-neutral-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="p-4 space-y-1">
          {navigation.map((item) => {
            const isActive = currentPage === item.name.toLowerCase();
            return (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 admin-nav-link relative",
                  isActive
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-neutral-600 hover:bg-neutral-100"
                )}
              >
                <item.icon className={cn(
                  "w-5 h-5 mr-3",
                  isActive ? "text-emerald-700" : "text-neutral-400"
                )} />
                {item.name}
                {isActive && (
                  <ChevronRight className={cn(
                    "w-4 h-4 ml-auto",
                    isActive ? "text-emerald-700" : "text-neutral-400"
                  )} />
                )}
              </a>
            );
          })}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-neutral-200">
          <div className="mb-4 p-4 bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-xl">
            <p className="text-sm text-emerald-700 font-medium">Logged in as</p>
            <p className="text-sm text-emerald-900 font-semibold">admin@admascooperative.com</p>
          </div>
          <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-red-600 rounded-xl hover:bg-red-50 transition-all duration-300 group">
            <LogOut className="w-5 h-5 mr-3 transition-transform duration-300 group-hover:-translate-x-1" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className={cn(
        "transition-all duration-300 ease-in-out",
        isSidebarOpen ? "md:ml-64" : "ml-0"
      )}>
        {/* Top Bar */}
        <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-neutral-200">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-lg text-neutral-500 hover:bg-neutral-100 transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div className="relative hidden md:flex items-center">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Quick search..."
                  className="pl-10 pr-4 py-2 w-64 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* New Front Page Button */}
              <Link
                to="/"
                className="flex items-center px-4 py-2 text-sm font-medium text-emerald-600 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Front Page
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative p-2 rounded-lg hover:bg-neutral-100">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <DropdownMenuLabel className="font-semibold">Notifications</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {notifications.map((notification) => (
                    <DropdownMenuItem key={notification.id} className="flex items-center justify-between p-4">
                      <div>
                        <p className="text-sm font-medium">{notification.title}</p>
                        <p className="text-xs text-neutral-500">{notification.time}</p>
                      </div>
                      <Badge variant="outline" className={cn(
                        "ml-2",
                        notification.type === 'success' && "bg-emerald-100 text-emerald-800 border-emerald-200",
                        notification.type === 'warning' && "bg-amber-100 text-amber-800 border-amber-200",
                        notification.type === 'info' && "bg-blue-100 text-blue-800 border-blue-200"
                      )}>
                        New
                      </Badge>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="p-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                      <span className="text-sm font-medium text-white">A</span>
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">
                    Profile Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    Preferences
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600 cursor-pointer">
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="p-6 animate-slide-in">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-neutral-200 p-6">
          <div className="text-center text-sm text-neutral-500">
            <p>© {new Date().getFullYear()} Admas Cooperative Union. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}