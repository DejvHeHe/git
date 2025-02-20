extends CharacterBody2D

@export var SPEED = 200.0
@export var JUMP_VELOCITY = -400.0
@export var GRAVITY = 800.0
@export var DASH_SPEED = 500.0
@export var DASH_DURATION = 0.2 # Délka dashe v sekundách

@onready var ap = $AnimationPlayer
@onready var sprite = $Sprite2D

var is_dashing = false
var dash_direction = 0
var can_double_jump = false  # Přidáváme pro double jump

func _physics_process(delta: float) -> void:
	# Aplikuj gravitaci, pokud nejsi na podlaze.
	if not is_on_floor():
		velocity.y += GRAVITY * delta
	else:
		can_double_jump = true  # Když se dotkneme země, obnovíme možnost dvojitého skoku

	# Skákání + dvojitý skok
	if Input.is_action_just_pressed("jump"):
		if is_on_floor():
			velocity.y = JUMP_VELOCITY
		elif can_double_jump:  # Pokud nejsme na zemi a máme možnost double jumpu
			velocity.y = JUMP_VELOCITY
			can_double_jump = false  # Double jump vyčerpán

	# Pohyb doleva a doprava.
	var direction := Input.get_axis("move_left", "move_right")

	# Pokud není dash, hráč může normálně chodit
	if not is_dashing:
		if direction != 0:
			velocity.x = direction * SPEED
			sprite.flip_h = (direction == -1)  # Otočí postavu
		else:
			velocity.x = move_toward(velocity.x, 0, SPEED * delta)

	# Dashování.
	if Input.is_action_just_pressed("dash") and not is_dashing and direction != 0:
		is_dashing = true
		dash_direction = direction
		velocity.x = dash_direction * DASH_SPEED
		ap.play("dash")

		# Počkej na dokončení dashe
		await get_tree().create_timer(DASH_DURATION).timeout

		is_dashing = false

		# Po dashe obnovíme směr pohybu podle vstupu hráče
		direction = Input.get_axis("move_left", "move_right")
		velocity.x = direction * SPEED
		
	

	# Pohyb a animace.
	move_and_slide()
	update_Animation(direction)

func update_Animation(direction):
	if is_on_floor():
		if direction == 0:
			ap.play("idle")
		else:
			ap.play("run")
	else:
		if velocity.y < 0:
			ap.play("jump")
		else:
			ap.play("fall")
