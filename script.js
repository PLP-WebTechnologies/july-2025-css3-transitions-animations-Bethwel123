        loading.style.display = 'flex';
        isProcessing = true;
        
        // Simulate processing time
        setTimeout(() => {
            loading.style.display = 'none';
            isProcessing = false;
            
            // Show completion message
            const element = document.getElementById('dentalDemo');
            element.textContent = 'Processing Complete!';
            element.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
            
            setTimeout(() => {
                element.textContent = 'Click for Demo';
                element.style.background = 'linear-gradient(135deg, #5BC0EB 0%, #0077B6 100%)';
            }, 2000);
        }, 3000);

// Card flip animation control
function flipInfoCard() {
    const card = document.getElementById('techCard');
    card.classList.toggle('flipped');
}

// Service booking functions demonstrating parameter usage
function bookService(serviceType) {
    const serviceMessages = {
        'general': 'Scheduling general dentistry appointment...',
        'cosmetic': 'Scheduling cosmetic consultation...',
        'restorative': 'Scheduling restorative evaluation...',
        'orthodontics': 'Scheduling orthodontic consultation...',
        'surgery': 'Scheduling surgical consultation...'
    };
    
    showLoadingDemo();
    
    setTimeout(() => {
        alert(`${serviceMessages[serviceType] || 'Scheduling appointment...'}\nOur staff will contact you within 24 hours.`);
    }, 1500);
}

// Emergency handling function
function handleEmergency() {
    const confirmed = confirm('This will connect you to our emergency line. Continue?');
    if (confirmed) {
        alert('Connecting to emergency line: (555) 123-HELP\nFor immediate assistance, please call now.');
    }
}

// Treatment cost calculator demonstrating complex function logic
function calculateTreatmentCost() {
    const quantity = parseInt(document.getElementById('treatmentInput').value);
    const unitPrice = parseInt(document.getElementById('treatmentType').value);
    const resultElement = document.getElementById('costResult');
    
    if (isNaN(quantity) || quantity <= 0) {
        resultElement.innerHTML = '<span style="color: #e74c3c;">Please enter a valid number of treatments</span>';
        return;
    }
    
    // Get insurance coverage if available
    const insuranceResult = document.getElementById('insuranceResult').textContent;
    let coverage = 0;
    if (insuranceResult.includes('Valid insurance')) {
        const match = insuranceResult.match(/(\d+)% coverage/);
        coverage = match ? parseInt(match[1]) : 0;
    }
    
    const calculation = calculateTreatmentTotal(quantity, unitPrice, coverage);
    
    resultElement.innerHTML = `
        <strong>Treatment Cost Breakdown:</strong><br>
        Base Total: $${calculation.baseTotal.toFixed(2)}<br>
        ${coverage > 0 ? `Insurance Savings (${coverage}%): -$${calculation.savings.toFixed(2)}<br>` : ''}
        <strong>Final Total: $${calculation.finalTotal.toFixed(2)}</strong>
    `;
}

// Insurance verification function
function verifyInsurance() {
    const insuranceId = document.getElementById('insuranceId').value;
    const resultElement = document.getElementById('insuranceResult');
    
    if (!insuranceId.trim()) {
        resultElement.innerHTML = '<span style="color: #e74c3c;">Please enter your insurance ID</span>';
        return;
    }
    
    const verification = validateInsuranceId(insuranceId);
    
    if (verification.valid) {
        resultElement.innerHTML = `<span style="color: #27ae60;">${verification.message}</span>`;
    } else {
        resultElement.innerHTML = `<span style="color: #e74c3c;">${verification.message}</span>`;
    }
}

// Additional professional functions
function updateAvailability() {
    updatePatientPortal();
    
    const element = document.getElementById('dentalDemo');
    element.textContent = 'Updating...';
    triggerAnimation('gentle-pulse');
    
    setTimeout(() => {
        element.textContent = 'Updated!';
    }, 1000);
}

function showServiceDetails() {
    alert('Our comprehensive services include:\n\n• General & Preventive Care\n• Advanced Cosmetic Treatments\n• Restorative Dentistry\n• Orthodontic Solutions\n• Oral Surgery\n• Emergency Care\n\nContact us for detailed information about any service.');
}

function togglePatientInfo() {
    const modal = document.getElementById('appointmentModal');
    if (modal.style.display === 'block') {
        hideModal();
    } else {
        showAppointmentModal();
    }
}

function submitAppointment() {
    showLoadingDemo();
    
    setTimeout(() => {
        alert('Thank you! Your appointment request has been submitted.\n\nOur staff will contact you within 24 hours to confirm your appointment.\n\nFor urgent matters, please call (555) 123-HELP');
        hideModal();
    }, 2000);
}

/* ========== SCOPE DEMONSTRATION & INITIALIZATION ========== */

// Function demonstrating different scopes
function demonstrateScope() {
    // Local variables
    let localPatientData = "Confidential patient information";
    const clinicPolicy = "HIPAA compliant";
    
    function innerScopeFunction() {
        let innerVariable = "Accessible only within this function";
        console.log("Inner function can access:", localPatientData);
        console.log("Inner function can access global:", globalPatientCount);
        return innerVariable;
    }
    
    console.log("Local scope demonstration complete");
    return innerScopeFunction();
}

// Navigation scroll effect
function handleNavScroll() {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize display values
    updatePatientPortal();
    
    // Set up automatic time updates
    setInterval(() => {
        document.getElementById('currentTime').textContent = formatProfessionalTime();
    }, 60000); // Update every minute
    
    // Demonstrate scope in console
    console.log("=== Elite Dental Care - Professional Functions Demo ===");
    console.log("Global patient count:", globalPatientCount);
    demonstrateScope();
    console.log("After scope demonstration:", globalPatientCount);
});

// Event listeners
window.addEventListener('scroll', handleNavScroll);

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('appointmentModal');
    if (event.target === modal) {
        hideModal();
    }
});

// Professional keyboard shortcuts
document.addEventListener('keydown', function(event) {
    // ESC key closes modal
    if (event.key === 'Escape') {
        hideModal();
    }
    
    // Ctrl/Cmd + E for emergency
    if ((event.ctrlKey || event.metaKey) && event.key === 'e') {
        event.preventDefault();
        handleEmergency();
    }
});

console.log("Elite Dental Care website initialized successfully!");
console.log("Assignment components loaded: CSS3 Animations ✓, JavaScript Functions ✓, Integration ✓");