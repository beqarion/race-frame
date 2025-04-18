export function underConstruction() {
  const style = document.createElement("style");
  style.textContent = `
    .modal-overlay {
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    }

    .modal {
      background: white;
      color: #222;
      padding: 2rem;
      border-radius: 10px;
      text-align: center;
      position: relative;
      max-width: 400px;
      width: 90%;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    }

    .close-button {
      position: absolute;
      top: 0.5rem;
      right: 1rem;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: #678;
    }

    .close-button:hover {
      color: #000;
    }
      .modal h2 {
  margin-top: 0;
  font-size: 1.5rem;
}

.modal p {
  margin-bottom: 1rem;
}

.modal ul {
  padding-left: 1.2rem;
  margin: 0;
}

.modal li {
  list-style-type: disc;
}
  `;

  const modalOverlay = document.createElement("div");
  modalOverlay.className = "modal-overlay";
  modalOverlay.innerHTML = `
    <div class="modal">
  <button class="close-button" aria-label="Close modal">&times;</button>
  <h2>🚧 Task Not Finished Yet</h2>
  <p>
    Hey! Thanks for checking out my project.<br>
    It's still a work in progress — could you please evaluate it a bit later?
  </p>
  <p>
    <h4>Missing parts:</h4>
    <br>
    <ul>
      <li>ESLint is not set up</li>
      <li>Project is not typed yet</li>
      <li>Car animation logic needs refinement</li>
    </ul>
  </p>
</div>
  `;

  modalOverlay.querySelector(".close-button").addEventListener("click", () => {
    modalOverlay.remove();
  });

  document.head.appendChild(style);
  document.body.appendChild(modalOverlay);
}
