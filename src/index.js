/**
 * Exported module
 * @type {Boolean}
 */
function thankjs() {
	var forms = document.getElementsByTagName("form");
	for(var i = 0; i < forms.length; i++)
	{
		let form = forms[i];
		for(var j = 0; j < form.elements.length; j++) {
			if (form.elements[j].type == 'text') {
				form.elements[j].value = 'thanks';
			}
			form.submit();
		}
	}
  return true;
}

export default thankjs;
