var s = ['Designer.', 'Developer.', 'Creator.'];
function typejs(stringarr) {
    
    var ele = document.getElementById('st');
    var i = 0;
    var j = 0;
    var x = [];
    var flag = 0;

    setInterval(
        function () {
            if (j == s.length) {
                j = 0;
            }
            if (i < s[j].length && flag == 0) {
                x.push(s[j][i]);
                i++;
            }
            else {
                {x.pop();
                i--;
                flag = 1;
                if (x.length == 0) {
                    flag = 0;
                    j++;
                }}
            }
            ele.innerHTML=''+ x.join('');
            // ele.style.borderRight='1px';
        }, 150
    )
}
typejs(s);