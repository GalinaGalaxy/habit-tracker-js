const input = document.getElementById('habit-input');
const addBtn = document.getElementById('add-habit-btn');
const habitsList = document.getElementById('habits-list');

addBtn.addEventListener('click', function(){
  const habit = input.value.trim()
  if (habit !== '') {
    addHabit(habit);
    input.value = '';
  }
});

function addHabit(habitName) {
  const li = document.createElement('li');
  li.className = 'habit-item';
  li.innerHTML = `
  <span>${habitName}</span>
  <button class='done-btn>Выполнено</button>`;
  habitsList.appendChild(li)
}