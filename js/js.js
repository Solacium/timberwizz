(function() {

    var dropDownShown = false;

    function initDropdowns() {
        var elements = document.querySelectorAll('.dropdownParent');

        for (var i=0; i< elements.length; i++) {
            elements[i].onclick = (function (elem) {
                return function() {
                    var child = document.getElementById(elem.dataset['target']);

                    child.style.display = 'block';
                    setTimeout(function() {
                        dropDownShown = true;
                    }, 100);
                }
            })(elements[i]);
        }
    }

    function hideDropdowns() {
        var elements = document.querySelectorAll('.dropdownChild');

        for (var i=0; i< elements.length; i++) {
            elements[i].style.display = 'none';
        }

        setTimeout(function() {
            dropDownShown = false;
        }, 100);
    }

    function initHide() {
        document.body.addEventListener('click', function(event) {
            if (event.target.className.indexOf('dropdownChild') === -1) {
                if (event.target.className.indexOf('dropdownParent') === -1) {
                    hideDropdowns();
                } else if (event.target.className.indexOf('dropdownParent') !== -1 && dropDownShown) {
                    hideDropdowns();
                }
            }
        })
    }

    window.onload = function() {
        initDropdowns();
        initHide();
    };

})();