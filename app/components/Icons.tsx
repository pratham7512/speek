// Lucide React icons - minimal premium icons
import {
  Home,
  MessageCircle,
  Folder,
  Settings,
  User,
  Video,
  Users,
  Check,
  FileText,
  BookOpen,
} from 'lucide-react';

// Export icons with consistent styling
export const HomeIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <Home className={className} strokeWidth={1.5} />
);

export const MessageIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <MessageCircle className={className} strokeWidth={1.5} />
);

export const FolderIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <Folder className={className} strokeWidth={1.5} />
);

export const SettingsIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <Settings className={className} strokeWidth={1.5} />
);

export const UserIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <User className={className} strokeWidth={1.5} />
);

export const VideoIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <Video className={className} strokeWidth={1.5} />
);

export const UsersIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <Users className={className} strokeWidth={1.5} />
);

export const CheckIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <Check className={className} strokeWidth={2} />
);

export const DocumentIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <FileText className={className} strokeWidth={1.5} />
);

export const BookIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <BookOpen className={className} strokeWidth={1.5} />
);

