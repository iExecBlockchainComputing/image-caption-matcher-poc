import { Link } from 'react-router-dom';

export function ProfileNavMenu() {
  return (
    <div className="border-grey-700 flex gap-x-12 border-b pb-2">
      <Link
        to={'/my-content'}
        className="text-grey-400 [&.active]:text-primary flex items-center gap-x-1.5 text-lg transition-colors hover:text-white"
      >
        My content
      </Link>

      <Link
        to={'/settings'}
        className="text-grey-400 [&.active]:text-primary flex items-center gap-x-1.5 text-lg transition-colors hover:text-white"
      >
        My settings
      </Link>
    </div>
  );
}
