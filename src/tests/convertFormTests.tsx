import { render, fireEvent } from '@testing-library/react';
import ConvertForm from '../components/ConvertForm';

// src/components/ConvertForm.test.tsx

describe('ConvertForm handleSubmit', () => {
  it('calls setFormResult with correct values for webContent', () => {
    const mockSetFormResult = jest.fn();
    const { getByLabelText, getByText } = render(
      <ConvertForm setFormResult={mockSetFormResult} />
    );

    const urlInput = getByLabelText(/Site URL/i);
    fireEvent.change(urlInput, { target: { value: 'https://example.com' } });

    // webContent is default checked
    const submitButton = getByText(/Convert/i);
    fireEvent.click(submitButton);

    expect(mockSetFormResult).toHaveBeenCalledWith({
      url: 'https://example.com',
      type: 'webContent',
    });
  });

  it('calls setFormResult with correct values for videoTranscript', () => {
    const mockSetFormResult = jest.fn();
    const { getByLabelText, getByText } = render(
      <ConvertForm setFormResult={mockSetFormResult} />
    );

    const urlInput = getByLabelText(/Site URL/i);
    fireEvent.change(urlInput, { target: { value: 'https://video.com' } });

    const radio = getByLabelText(/Video transcript/i);
    fireEvent.click(radio);

    const submitButton = getByText(/Convert/i);
    fireEvent.click(submitButton);

    expect(mockSetFormResult).toHaveBeenCalledWith({
      url: 'https://video.com',
      type: 'videoTranscript',
    });
  });

  it('calls setFormResult with correct values for youtubeMeta', () => {
    const mockSetFormResult = jest.fn();
    const { getByLabelText, getByText } = render(
      <ConvertForm setFormResult={mockSetFormResult} />
    );

    const urlInput = getByLabelText(/Site URL/i);
    fireEvent.change(urlInput, { target: { value: 'https://youtube.com' } });

    const radio = getByLabelText(/Youtube metadata/i);
    fireEvent.click(radio);

    const submitButton = getByText(/Convert/i);
    fireEvent.click(submitButton);

    expect(mockSetFormResult).toHaveBeenCalledWith({
      url: 'https://youtube.com',
      type: 'youtubeMeta',
    });
  });
});
