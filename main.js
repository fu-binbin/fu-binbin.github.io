function changeBackground() {
    const bg = document.getElementById('bgSelect').value;
    document.body.style.background = `url('${bg}') no-repeat center center fixed`;
    document.body.style.backgroundSize = 'cover';
}

document.addEventListener('DOMContentLoaded', function() {
    changeBackground(); // 页面加载时根据下拉框设置背景
});

