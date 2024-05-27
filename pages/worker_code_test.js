
            self.addEventListener('fetch', function(event) {
                // Check if the request is for a PDF file
                if (event.request.url.endsWith('.pdf')) {
                    event.respondWith(
                        fetch(event.request).then(function(response) {
                            return response.blob().then(function(blob) {
                                // Create a new Blob URL
                                const newBlobUrl = URL.createObjectURL(blob);

                                // Create a new Response with the Blob
                                const newResponse = new Response(blob, {
                                    status: response.status,
                                    statusText: response.statusText,
                                    headers: response.headers
                                });

                                // Trigger the download with a new name
                                triggerDownload(newBlobUrl, 'newfilename.pdf');

                                return newResponse;
                            });
                        })
                    );
                }
            });

            // Function to trigger the download
            function triggerDownload(blobUrl, filename) {
                const link = new URL(blobUrl);
                link.download = filename;

                // Simulate a click event
                const clickEvent = new MouseEvent('click');
                link.dispatchEvent(clickEvent);

                // Cleanup the Blob URL
                URL.revokeObjectURL(blobUrl);
            }
            
