(function() {

    var currentDropdown;

    function initDropdowns() {
        var elements = document.querySelectorAll('.dropdownParent');

        for (var i=0; i< elements.length; i++) {
            elements[i].onclick = (function (elem) {
                return function() {
                    if (currentDropdown) {
                        hideCurrentDropdown();
                    }

                    currentDropdown = document.getElementById(elem.dataset['target']);

                    currentDropdown.style.display = 'block';
                }
            })(elements[i]);
        }
    }

    function hideCurrentDropdown() {
        currentDropdown.style.display = 'none';
    }

    function initHide() {
        document.body.addEventListener('click', function(event) {
            if (event.target !== currentDropdown &&
                event.target.className.indexOf('dropdownParent') === -1 &&
                event.target.className.indexOf('dropdownInner') === -1) {
                hideCurrentDropdown();
            }
        })
    }

    window.onload = function() {
        initDropdowns();
        initHide();
    };

})();