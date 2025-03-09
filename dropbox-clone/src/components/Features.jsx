import React from "react";

const Features = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <img
              src="https://via.placeholder.com/100"
              alt="Sync Files"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Sync Files</h3>
            <p className="text-gray-600 mt-2">
              Sync your files across devices effortlessly.
            </p>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/100"
              alt="Secure Storage"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Secure Storage</h3>
            <p className="text-gray-600 mt-2">
              Your files are stored with industry-grade encryption.
            </p>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/100"
              alt="File Sharing"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">File Sharing</h3>
            <p className="text-gray-600 mt-2">
              Share your files securely with others.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
