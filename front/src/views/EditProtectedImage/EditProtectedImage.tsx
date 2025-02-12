import { ChevronLeft } from 'react-feather';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CreateNewContent } from './CreateNewContent';

export function EditProtectedImage() {
  return (
    <div className="relative grid gap-10">
      <Button
        asChild
        variant="text"
        className="text-s absolute -left-6 -top-12 flex items-center gap-2"
      >
        <Link to="/protected-images">
          <ChevronLeft /> Home
        </Link>
      </Button>
      <h1>Edit image</h1>
      <div className="grid gap-12">
        <CreateNewContent />
      </div>
    </div>
  );
}
