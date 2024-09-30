import React from "react";

export default function Footer() {
  return (
    <footer className="sticky top-[100vh] pt-8 pb-4 px-8 bg-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-blue font-sohneBuch">
        <p className="mb-2 md:mb-0">
          © 2024 créé par Mpoy Jean-Marc, tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
