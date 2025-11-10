// Form Validation - Clean & Optimized
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const inputs = document.querySelectorAll("input");

  // Configuration
  const config = {
    username: { min: 3, message: "Tên người dùng phải dài ít nhất 3 ký tự" },
    email: { message: "Email không hợp lệ" },
    password: { min: 8, message: "Mật khẩu phải dài ít nhất 8 ký tự" },
    "confirm-password": { message: "Mật khẩu không khớp" },
  };

  const icons = {
    valid: '<img src="./icon/correct.png" alt="Valid" class="w-5 h-5">',
    invalid: '<img src="./icon/cross.png" alt="Invalid" class="w-5 h-5">',
  };

  // Initialize
  initForm();
  setupEventListeners();

  // INITIALIZATION
  function initForm() {
    inputs.forEach((input) => addValidationIcon(input));
  }

  function setupEventListeners() {
    inputs.forEach((input) => {
      input.addEventListener("input", () => validateField(input));
    });
    form.addEventListener("submit", handleSubmit);
  }

  // FORM SUBMISSION
  function handleSubmit(e) {
    e.preventDefault();

    let isValid = true;
    inputs.forEach((input) => {
      if (!validateField(input)) isValid = false;
    });

    if (isValid) {
      alert("Form gửi thành công!");
      form.reset();
      clearAllIcons();
    }
  }

  // VALIDATION
  function validateField(input) {
    const value = input.value.trim();
    const id = input.id;

    // Check if empty
    if (!value) {
      showError(input, getEmptyMessage(id));
      return false;
    }

    // Validate based on field type
    if (id === "name" && value.length < config.username.min) {
      showError(input, config.username.message);
      return false;
    }

    if (id === "email" && !isValidEmail(value)) {
      showError(input, config.email.message);
      return false;
    }

    if (id === "password" && value.length < config.password.min) {
      showError(input, config.password.message);
      return false;
    }

    if (id === "confirm-password" && !isValidConfirmPassword(value)) {
      showError(input, config["confirm-password"].message);
      return false;
    }

    // All validations passed
    showSuccess(input);
    return true;
  }

  // VALIDATION HELPERS
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isValidConfirmPassword(confirmPassword) {
    const password = document.querySelector("#password").value.trim();
    return (
      password === confirmPassword && password.length >= config.password.min
    );
  }

  function getEmptyMessage(id) {
    const messages = {
      name: "Tên người dùng là bắt buộc",
      email: "Email là bắt buộc",
      password: "Mật khẩu là bắt buộc",
      "confirm-password": "Xác nhận mật khẩu là bắt buộc",
    };
    return messages[id] || "";
  }

  // UI UPDATES
  function showError(input, message) {
    updateFieldState(input, true, message);
  }

  function showSuccess(input) {
    updateFieldState(input, false);
  }

  function updateFieldState(input, isError, message = "") {
    // Update error message
    const existingError = input.parentNode.querySelector('[data-error="true"]');
    if (message) {
      if (existingError) {
        existingError.textContent = message;
      } else {
        createErrorMessage(input, message);
      }
    } else if (existingError) {
      existingError.remove();
    }

    // Update validation icon
    const iconContainer = input.parentNode.querySelector(
      '[data-validation-icon="true"]'
    );
    if (iconContainer) {
      iconContainer.innerHTML = "";
      if (input.value.length > 0) {
        iconContainer.innerHTML = isError ? icons.invalid : icons.valid;
      }
    }

    // Update input styling
    input.classList.toggle("border-red-500", isError);
    input.classList.toggle("border-gray-300", !isError);
  }

  function createErrorMessage(input, message) {
    const errorDiv = document.createElement("div");
    errorDiv.className = "text-red-500 text-xs mt-1";
    errorDiv.textContent = message;
    errorDiv.setAttribute("data-error", "true");
    input.parentNode.insertBefore(errorDiv, input.nextSibling);
  }

  function addValidationIcon(input) {
    const iconContainer = document.createElement("div");
    iconContainer.className =
      "absolute right-5 top-12 transform -translate-y-1/2 pointer-events-none z-10";
    iconContainer.setAttribute("data-validation-icon", "true");
    input.parentNode.style.position = "relative";
    input.parentNode.appendChild(iconContainer);
  }

  function clearAllIcons() {
    inputs.forEach((input) => {
      const iconContainer = input.parentNode.querySelector(
        '[data-validation-icon="true"]'
      );
      if (iconContainer) iconContainer.innerHTML = "";
    });
  }
});
