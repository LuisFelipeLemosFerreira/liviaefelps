document.addEventListener("DOMContentLoaded", () => {
  const photoInputs = document.querySelectorAll(".photo-input")
  const clearAllBtn = document.getElementById("clearAll")
  const saveFrameBtn = document.getElementById("saveFrame")

  // Função para lidar com upload de fotos
  photoInputs.forEach((input) => {
    input.addEventListener("change", (e) => {
      const file = e.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          const photoSlot = input.closest(".photo-slot")
          const preview = photoSlot.querySelector(".photo-preview")

          preview.src = e.target.result
          photoSlot.classList.add("has-photo")
        }
        reader.readAsDataURL(file)
      }
    })
  })

  // Função para limpar todas as fotos
  clearAllBtn.addEventListener("click", () => {
    if (confirm("Tem certeza que deseja remover todas as fotos?")) {
      photoInputs.forEach((input) => {
        input.value = ""
        const photoSlot = input.closest(".photo-slot")
        const preview = photoSlot.querySelector(".photo-preview")

        preview.src = ""
        photoSlot.classList.remove("has-photo")
      })
    }
  })

  // Função para salvar o quadro (simula download)
  saveFrameBtn.addEventListener("click", () => {
    const frame = document.querySelector(".frame")

    // Esconde os controles temporariamente
    const controls = document.querySelector(".controls")
    controls.style.display = "none"

    // Simula captura do quadro
    setTimeout(() => {
      alert("Quadro salvo! (Em uma implementação real, aqui seria gerada uma imagem)")
      controls.style.display = "flex"
    }, 500)
  })

  // Adiciona efeito de hover nas fotos
  document.querySelectorAll(".photo-slot").forEach((slot) => {
    slot.addEventListener("mouseenter", function () {
      if (this.classList.contains("has-photo")) {
        const preview = this.querySelector(".photo-preview")
        preview.style.transform = "scale(1.05)"
      }
    })

    slot.addEventListener("mouseleave", function () {
      if (this.classList.contains("has-photo")) {
        const preview = this.querySelector(".photo-preview")
        preview.style.transform = "scale(1)"
      }
    })
  })
})
