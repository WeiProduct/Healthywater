// Translations
const translations = {
    en: {
        // Navigation
        app_name: "Healthy Water",
        features: "Features",
        screenshots: "Screenshots",
        download: "Download",

        // Hero Section
        hero_title: "Stay Hydrated, Stay Healthy",
        hero_subtitle: "Track your daily water intake with beautiful visualizations, AI-powered insights, and smart reminders. Available in English and Chinese.",
        download_app: "Download for iOS",
        learn_more: "Learn More",

        // Features
        features_title: "Powerful Features",
        smart_tracking: "Smart Tracking",
        smart_tracking_desc: "Beautiful water wave animations show your daily progress with precise measurements in multiple units.",
        ai_assistant: "AI Assistant",
        ai_assistant_desc: "Get personalized hydration advice powered by Google Gemini AI based on your drinking patterns.",
        smart_reminders: "Smart Reminders",
        smart_reminders_desc: "Customizable notifications that adapt to your schedule with weekday and weekend options.",
        personalized_goals: "Personalized Goals",
        personalized_goals_desc: "Daily water intake recommendations calculated based on your weight and health guidelines.",
        detailed_stats: "Detailed Statistics",
        detailed_stats_desc: "Track your progress with weekly, monthly, and yearly statistics including achievement rates.",
        bilingual_support: "Bilingual Support",
        bilingual_support_desc: "Full support for English and Chinese with seamless language switching.",

        // Screenshots
        app_preview: "App Preview",
        home_screen: "Home Screen",
        home_screen_desc: "Beautiful water progress visualization with quick-add buttons",
        ai_chat: "AI Assistant",
        ai_chat_desc: "Get personalized hydration advice from AI",
        statistics: "Statistics",
        statistics_desc: "Track your hydration progress over time",

        // Download
        download_now: "Download Now",
        download_subtitle: "Start your healthy hydration journey today",
        scan_qr: "Scan to download",
        ios_compatible: "iOS 15.0+",
        free_download: "Free Download",
        rating: "4.9★ Rating",

        // Footer
        privacy_policy: "Privacy Policy",
        terms_of_service: "Terms of Service",
        contact: "Contact",
        all_rights_reserved: "All rights reserved."
    },
    zh: {
        // Navigation
        app_name: "健康喝水",
        features: "功能特色",
        screenshots: "应用截图",
        download: "下载应用",

        // Hero Section
        hero_title: "保持水分，保持健康",
        hero_subtitle: "通过精美的可视化效果、AI智能洞察和智能提醒来跟踪您的每日饮水量。支持中英文双语。",
        download_app: "iOS下载",
        learn_more: "了解更多",

        // Features
        features_title: "强大功能",
        smart_tracking: "智能追踪",
        smart_tracking_desc: "精美的水波动画显示您的每日进度，支持多种单位的精确测量。",
        ai_assistant: "AI助手",
        ai_assistant_desc: "基于您的饮水模式，获得由Google Gemini AI提供的个性化补水建议。",
        smart_reminders: "智能提醒",
        smart_reminders_desc: "可自定义的通知，适应您的日程安排，支持工作日和周末选项。",
        personalized_goals: "个性化目标",
        personalized_goals_desc: "根据您的体重和健康指南计算的每日饮水量建议。",
        detailed_stats: "详细统计",
        detailed_stats_desc: "通过周、月、年统计数据跟踪您的进度，包括达标率。",
        bilingual_support: "双语支持",
        bilingual_support_desc: "完全支持中英文，无缝语言切换。",

        // Screenshots
        app_preview: "应用预览",
        home_screen: "主页面",
        home_screen_desc: "精美的饮水进度可视化，配有快速添加按钮",
        ai_chat: "AI助手",
        ai_chat_desc: "从AI获得个性化的补水建议",
        statistics: "统计数据",
        statistics_desc: "跟踪您的长期补水进度",

        // Download
        download_now: "立即下载",
        download_subtitle: "今天就开始您的健康补水之旅",
        scan_qr: "扫码下载",
        ios_compatible: "iOS 15.0+",
        free_download: "免费下载",
        rating: "4.9★ 评分",

        // Footer
        privacy_policy: "隐私政策",
        terms_of_service: "服务条款",
        contact: "联系我们",
        all_rights_reserved: "版权所有。"
    }
};

// Current language
let currentLang = 'en';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language preference
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
    
    // Initialize components
    initializeNavigation();
    initializeScreenshots();
    initializeAnimations();
    initializeScrollEffects();
});

// Language switching
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update language toggle button
    const langToggle = document.getElementById('current-lang');
    if (langToggle) {
        langToggle.textContent = lang.toUpperCase();
    }
    
    // Update all text content
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update document language attribute
    document.documentElement.lang = lang;
}

// Navigation functionality
function initializeNavigation() {
    // Language toggle
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            const newLang = currentLang === 'en' ? 'zh' : 'en';
            setLanguage(newLang);
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
}

// Screenshots slider functionality
function initializeScreenshots() {
    const screenshotItems = document.querySelectorAll('.screenshot-item');
    const screenshotBtns = document.querySelectorAll('.screenshot-btn');
    let currentScreenshot = 0;

    function showScreenshot(index) {
        // Hide all screenshots
        screenshotItems.forEach(item => {
            item.classList.remove('active');
        });
        
        // Remove active class from all buttons
        screenshotBtns.forEach(btn => {
            btn.classList.remove('active');
        });

        // Show selected screenshot
        if (screenshotItems[index]) {
            screenshotItems[index].classList.add('active');
        }
        
        // Highlight selected button
        if (screenshotBtns[index]) {
            screenshotBtns[index].classList.add('active');
        }
        
        currentScreenshot = index;
    }

    // Button click handlers
    screenshotBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            showScreenshot(index);
        });
    });

    // Auto-rotate screenshots every 5 seconds
    setInterval(() => {
        currentScreenshot = (currentScreenshot + 1) % screenshotItems.length;
        showScreenshot(currentScreenshot);
    }, 5000);
}

// Animation effects
function initializeAnimations() {
    // Water wave animation timing adjustment
    const waterWave = document.querySelector('.water-wave');
    if (waterWave) {
        // Add random delay to make animation more natural
        waterWave.style.animationDelay = Math.random() * 2 + 's';
    }

    // Feature cards hover effects
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Scroll effects and animations
function initializeScrollEffects() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
            }
        });
    }, observerOptions);

    // Add loading class to elements and observe them
    const animatedElements = document.querySelectorAll('.feature-card, .screenshot-item, .download-content');
    animatedElements.forEach(el => {
        el.classList.add('loading');
        observer.observe(el);
    });

    // Parallax effect for hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero');
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.backgroundPosition = `center ${speed}px`;
        }
    });
}

// Water progress animation
function animateWaterProgress() {
    const waterPercentage = document.querySelector('.water-percentage');
    const waterAmount = document.querySelector('.water-amount');
    const waterWave = document.querySelector('.water-wave');
    
    if (!waterPercentage || !waterAmount || !waterWave) return;
    
    let currentProgress = 0;
    const targetProgress = 75;
    const targetAmount = 1875;
    const totalAmount = 2500;
    
    const animationDuration = 2000; // 2 seconds
    const stepTime = 50; // 50ms per step
    const steps = animationDuration / stepTime;
    const progressStep = targetProgress / steps;
    const amountStep = targetAmount / steps;
    
    const progressInterval = setInterval(() => {
        currentProgress += progressStep;
        const currentAmount = Math.round(currentProgress * amountStep / progressStep);
        
        if (currentProgress >= targetProgress) {
            currentProgress = targetProgress;
            clearInterval(progressInterval);
        }
        
        waterPercentage.textContent = Math.round(currentProgress) + '%';
        waterAmount.textContent = `${Math.round(currentAmount)} / ${totalAmount} ml`;
        
        // Update water wave height
        const waveHeight = (currentProgress / 100) * 100;
        waterWave.style.height = waveHeight + '%';
    }, stepTime);
}

// Mobile menu toggle (for future mobile navigation)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button (optional)
function addScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.onclick = scrollToTop;
    
    // Style the button
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #007AFF;
        color: white;
        border: none;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', debounce(() => {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'flex';
        } else {
            scrollBtn.style.display = 'none';
        }
    }, 100));
}

// Initialize scroll to top button
document.addEventListener('DOMContentLoaded', function() {
    addScrollToTopButton();
    
    // Start water animation after a short delay
    setTimeout(() => {
        animateWaterProgress();
    }, 1000);
});

// Performance optimization - lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Error handling for missing images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Replace broken images with placeholder
            this.style.background = '#f0f0f0';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.innerHTML = '<i class="fas fa-image" style="font-size: 3rem; color: #ccc;"></i>';
        });
    });
});

// Export functions for potential future use
window.HealthyWaterSite = {
    setLanguage,
    scrollToTop,
    animateWaterProgress
};