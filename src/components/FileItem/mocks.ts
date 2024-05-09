export const mockTextFile = (): File =>
  new File(['foo bar baz'], 'Name.txt', { type: 'text/plain' });

export const mockImageFile = (): File =>
  new File(
    [
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAHAAcAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wgARCAAgACADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAwQFBv/EABgBAAIDAAAAAAAAAAAAAAAAAAMEAAEC/9oADAMBAAIQAxAAAAEooNQcrOSGtUnnbzSrWP1I45g//8QAHBAAAwACAwEAAAAAAAAAAAAAAQIDAAQREhMi/9oACAEBAAEFAmFaN6suTp2xH4MqsmJvpTAgpiEohok82XQ1kz9xVnisKluFDtH68bvt/wD/xAAbEQACAQUAAAAAAAAAAAAAAAAAASECAxARIv/aAAgBAwEBPwHWH3CK7bUn/8QAHBEAAgICAwAAAAAAAAAAAAAAAAEDEQIhEzFB/9oACAECAQE/AbFfolx7fZHIstH/xAAhEAABBAEEAwEAAAAAAAAAAAABAAIDERITISJBEDFhMv/aAAgBAQAGPwIyNk1AVyB8WCv1uqlblXaLoXghcjuqw292rYKPwLgTksSQZKWE/sOWGmB9RcOu6TREDkSv/8QAHRABAAIDAAMBAAAAAAAAAAAAAQARITFBUWFxgf/aAAgBAQABPyElqP0hRAPhIHUQayS+R0zhmo7iZgye50lSZHmUtAsRi/caMTbslfU5dRaX21Up2iinpCqlr6iDFjxC0FiIYPvqf//aAAwDAQACAAMAAAAQQs0E/8QAGREBAQADAQAAAAAAAAAAAAAAAQARITFB/9oACAEDAQE/EOMlqauJA+r/xAAaEQABBQEAAAAAAAAAAAAAAAABABARIUFx/9oACAECAQE/ELThaA0dUitIK//EACAQAQACAgICAwEAAAAAAAAAAAERIQAxQWFxsVGRwdH/2gAIAQEAAT8Qfl5TXLAdfGHAihE4k0IJicbEmRM58MYkJCjnxiqFVUp8p/PrC6nZgX8a5DDWyQITJNdlCJDNNyvrL320HhZ6xLaeS99n7WBgWRCX03UmPn5qAQhOmGPOcd0BsdPL1g0qCJIml3RlK22LNyNDnrP/2Q==',
    ],
    'Image.jpg',
    { type: 'image/jpeg' },
  );
