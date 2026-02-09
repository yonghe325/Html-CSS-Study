// 等待DOM完全加载
document.addEventListener('DOMContentLoaded', function() {
    console.log('电梯导航练习项目已加载！');
    
    // ========== 1. 获取DOM元素 ==========
    const elevatorItems = document.querySelectorAll('.elevator-item');
    const sections = document.querySelectorAll('.content-section');
    const backToTopBtn = document.getElementById('backToTop');
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.querySelector('.progress-text');
    const scrollYEl = document.getElementById('scrollY');
    const scrollHeightEl = document.getElementById('scrollHeight');
    const innerHeightEl = document.getElementById('innerHeight');
    const currentSectionEl = document.getElementById('currentSection');
    const scrollToTopBtn = document.getElementById('scrollToTop');
    const scrollToBottomBtn = document.getElementById('scrollToBottom');
    const scrollBy200Btn = document.getElementById('scrollBy200');
    const productCards = document.querySelectorAll('.product-card');
    const observerItems = document.querySelectorAll('.observer-item');
    const testInput = document.getElementById('testInput');
    const toggleAnimationBtn = document.getElementById('toggleAnimation');
    
    // ========== 2. 滚动信息更新函数 ==========
    function updateScrollInfo() {
        // window.scrollY - 文档垂直滚动像素数
        const scrollY = window.scrollY;
        // document.documentElement.scrollHeight - 文档总高度
        const scrollHeight = document.documentElement.scrollHeight;
        // window.innerHeight - 视口高度
        const innerHeight = window.innerHeight;
        
        // 更新显示
        scrollYEl.textContent = scrollY + 'px';
        scrollHeightEl.textContent = scrollHeight + 'px';
        innerHeightEl.textContent = innerHeight + 'px';
        
        // 计算滚动进度百分比
        const scrollPercentage = ((scrollY) / (scrollHeight - innerHeight) * 100).toFixed(1);
        progressBar.style.setProperty('--progress-width', scrollPercentage + '%');
        progressText.textContent = scrollPercentage + '%';
        
        // 更新进度条
        progressBar.querySelector('::after').style.width = scrollPercentage + '%';
        
        // 更新当前章节
        updateCurrentSection();
        
        // 控制回到顶部按钮显示
        if (scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
        
        // 更新产品卡片的可见度指示器
        updateProductCardVisibility();
    }
    
    // ========== 3. 更新当前章节函数 ==========
    function updateCurrentSection() {
        let currentSection = 'section1';
        const scrollPosition = window.scrollY + 100; // 加上偏移量
        
        // 遍历所有章节，找到当前位于视口中的章节
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && 
                scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.id;
            }
        });
        
        // 更新显示
        currentSectionEl.textContent = currentSection;
        
        // 更新电梯导航激活状态
        elevatorItems.forEach(item => {
            item.classList.remove('active');
            if (item.dataset.target === currentSection) {
                item.classList.add('active');
            }
        });
    }
    
    // ========== 4. 产品卡片可见度计算 ==========
    function updateProductCardVisibility() {
        productCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // 计算元素在视口中的可见比例
            let visibleHeight = 0;
            
            if (rect.top >= 0 && rect.top < windowHeight) {
                // 元素顶部进入视口
                visibleHeight = Math.min(rect.height, windowHeight - rect.top);
            } else if (rect.top < 0 && rect.bottom > 0) {
                // 元素部分在视口上方
                visibleHeight = Math.min(rect.bottom, windowHeight);
            }
            
            const visiblePercentage = Math.round((visibleHeight / rect.height) * 100);
            
            // 更新显示
            const indicator = card.querySelector('.scroll-indicator span');
            if (indicator) {
                indicator.textContent = visiblePercentage + '%';
                
                // 根据可见度改变透明度
                card.style.opacity = 0.5 + (visiblePercentage / 100) * 0.5;
            }
        });
    }
    
    // ========== 5. 平滑滚动函数 ==========
    let smoothScrollEnabled = true;
    
    function scrollToSection(sectionId, behavior = 'smooth') {
        const section = document.getElementById(sectionId);
        if (section) {
            // 检查是否启用了平滑滚动
            const scrollBehavior = smoothScrollEnabled && behavior === 'smooth' ? 'smooth' : 'auto';
            
            // 使用scrollIntoView API
            section.scrollIntoView({
                behavior: scrollBehavior,
                block: 'start'
            });
            
            console.log(`滚动到章节: ${sectionId}, 行为: ${scrollBehavior}`);
        }
    }
    
    // ========== 6. 事件监听器设置 ==========
    
    // 窗口滚动事件 - 使用节流优化性能
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        // 清除之前的定时器
        if (scrollTimeout) {
            cancelAnimationFrame(scrollTimeout);
        }
        
        // 使用requestAnimationFrame进行节流
        scrollTimeout = requestAnimationFrame(updateScrollInfo);
    });
    
    // 电梯导航点击事件 - 使用事件委托
    document.querySelector('.elevator-menu').addEventListener('click', function(e) {
        // 查找被点击的电梯项
        const elevatorItem = e.target.closest('.elevator-item');
        if (elevatorItem) {
            e.preventDefault();
            const targetSection = elevatorItem.dataset.target;
            scrollToSection(targetSection);
            
            // 添加点击反馈
            elevatorItem.style.transform = 'scale(0.95)';
            setTimeout(() => {
                elevatorItem.style.transform = '';
            }, 150);
        }
    });
    
    // 回到顶部按钮
    backToTopBtn.addEventListener('click', function() {
        // 多种方法实现回到顶部：
        
        // 方法1: scrollTo
        window.scrollTo({
            top: 0,
            behavior: smoothScrollEnabled ? 'smooth' : 'auto'
        });
        
        // 方法2: scrollIntoView (备选)
        // document.body.scrollIntoView({ behavior: 'smooth' });
        
        console.log('回到顶部，使用平滑滚动:', smoothScrollEnabled);
    });
    
    // 滚动控制按钮
    scrollToTopBtn.addEventListener('click', () => scrollToSection('section1'));
    scrollToBottomBtn.addEventListener('click', function() {
        // 滚动到底部
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: smoothScrollEnabled ? 'smooth' : 'auto'
        });
    });
    
    scrollBy200Btn.addEventListener('click', function() {
        // 滚动指定距离
        window.scrollBy({
            top: 200,
            behavior: smoothScrollEnabled ? 'smooth' : 'auto'
        });
    });
    
    // 演示滚动按钮
    document.querySelectorAll('.demo-scroll').forEach(btn => {
        btn.addEventListener('click', function() {
            const target = this.dataset.target;
            scrollToSection(target);
        });
    });
    
    // 切换平滑滚动动画
    toggleAnimationBtn.addEventListener('click', function() {
        smoothScrollEnabled = !smoothScrollEnabled;
        this.textContent = smoothScrollEnabled ? 
            '禁用平滑滚动' : '启用平滑滚动';
        this.style.background = smoothScrollEnabled ? '#6a11cb' : '#'
    });
})