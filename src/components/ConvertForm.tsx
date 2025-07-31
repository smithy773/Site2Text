export default function ConvertForm({
  setFormResult,
}: {
  setFormResult: ({ url, type }: { url: string; type: string }) => void;
}) {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const url = (event.target as HTMLFormElement).url.value;
    const type = (event.target as HTMLFormElement).type.value;
    setFormResult({ url: url, type: type });
  };
  return (
    <div>
      <form className='flex gap-2 items-center' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='url'>Site URL:</label>
          <input
            className='border rounded-md'
            type='url'
            id='url'
            name='url'
            required
          />
        </div>
        <div>
          <fieldset>
            <legend>Select a conversion type:</legend>

            <div>
              <input
                type='radio'
                id='webContent'
                name='type'
                value='webContent'
                defaultChecked
              />
              <label htmlFor='webContent'>Scrape web content</label>
            </div>

            <div>
              <input
                type='radio'
                id='videoTranscript'
                name='type'
                value='videoTranscript'
              />
              <label htmlFor='videoTranscript'>Video transcript</label>
            </div>

            <div>
              <input
                type='radio'
                id='youtubeMeta'
                name='type'
                value='youtubeMeta'
              />
              <label htmlFor='youtubeMeta'>Youtube metadata</label>
            </div>
          </fieldset>
        </div>

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
