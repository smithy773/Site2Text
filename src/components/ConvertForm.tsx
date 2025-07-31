export default function ConvertForm({
  setFormResult,
}: {
  setFormResult: (arg1: string) => void;
}) {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const url = (event.target as HTMLFormElement).url.value;
    setFormResult(url);
  };
  return (
    <div>
      <form className='flex gap-2 items-center' onSubmit={handleSubmit}>
        <label htmlFor='url'>Site URL:</label>
        <input
          className='border rounded-md'
          type='url'
          id='url'
          name='url'
          required
        />
        <button
          className='border rounded-md bg-blue-500 text-white px-2 py-1 hover:bg-blue-600 hover:cursor-pointer'
          type='submit'
        >
          Convert
        </button>
      </form>
    </div>
  );
}
