import { CreateNewContent } from './CreateNewContent';

export function EditProtectedImage() {
  return (
    <div className="grid gap-10">
      <h1>Edit image</h1>
      <div className="grid gap-12">
        <CreateNewContent />
      </div>
    </div>
  );
}
