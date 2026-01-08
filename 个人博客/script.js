// 平滑滚动效果
function smoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // 减去导航栏高度
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 表单提交处理
function handleFormSubmission() {
    const messageForm = document.querySelector('.message-form');
    
    if (messageForm) {
        messageForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = new FormData(this);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // 简单验证
            if (!data.name || !data.gender || !data.phone || !data.email || !data.content) {
                alert('请填写所有必填字段！');
                return;
            }
            
            // 手机号验证
            const phoneRegex = /^1[3-9]\d{9}$/;
            if (!phoneRegex.test(data.phone)) {
                alert('请输入有效的手机号！');
                return;
            }
            
            // 邮箱验证
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('请输入有效的邮箱！');
                return;
            }
            
            // 模拟提交成功
            alert('留言提交成功！感谢您的留言！');
            
            // 重置表单
            this.reset();
        });
    }
}

// 滚动时导航栏样式变化
function handleNavScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 105, 180, 0.95)';
            navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgb(255, 105, 180)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
}

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', () => {
    smoothScroll();
    handleFormSubmission();
    handleNavScroll();
});

// 添加页面加载动画
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});