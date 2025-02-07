import { CreateNewContent } from './CreateNewContent';

export function AddProtectedImages() {
  return (
    <div className="grid gap-10">
      <h1>Protect new image</h1>
      <div className="grid gap-12">
        <CreateNewContent />
      </div>
    </div>
  );
}
